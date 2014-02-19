set :day1, '04/11'
set :day2, '04/12'

###
# Blog
###

activate :blog do |blog|
	blog.prefix = "news"
end

###
# Compass
###

# Change Compass configuration
# compass_config do |config|
#   config.output_style = :compact
# end

###
## Haml
###

set :haml, { :attr_wrapper => '"', :format => :html5 }

###
## Markdown
###

#require 'kramdown'
set :markdown_engine, :kramdown
set :markdown, :layout_engine => :haml

###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
# page "/path/to/file.html", :layout => false
#
# With alternative layout
# page "/path/to/file.html", :layout => :otherlayout
#
# A path which all have the same layout
# with_layout :admin do
#   page "/admin/*"
# end

page "/feed.xml", layout: false
page "/news/*", :layout => :article

# Proxy pages (http://middlemanapp.com/basics/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", :locals => {
#  :which_fake_page => "Rendering a fake page with a local variable" }

###
# Helpers
###

set :relative_links, true

# Automatic image dimensions on image_tag helper
# activate :automatic_image_sizes

# Reload the browser automatically whenever files change
 activate :livereload

# Methods defined in the helpers block are available in templates
helpers do
  def program (date)
    capture_haml do
      day = date == settings.day1 ? 'day1' : 'day2'
      data.schedule.send(day).each_with_index do |schedule, index|
        haml_tag :tr do
          haml_tag :td, schedule.time
          case schedule.type
          when 'lunch'
            haml_tag :td, '午餐', :class => "lunch", :colspan => 3
          when 'lightning'
            haml_tag :td, 'Lightning Talks', :class => "lightning", :colspan => 3
          when 'keynote'
            talk = data.program.send(day).find{|talk| talk.time == index}
            haml_tag :td, :class => "keynote", :colspan => 3 do
              haml_tag :span, talk.speaker, :class => "speaker"
              haml_tag :span, talk.title, :class => "title"
            end
          when 'track'
            [1, 0, 2].each do |room|
              talk = data.program.send(day).find{|talk| talk.time == index and talk.room == room}
              if talk.speaker.empty?
                haml_tag :td, '', :class => "empty"
              else
                haml_tag :td, :class => "talk" do
                  haml_tag :span, talk.speaker, :class => "speaker"
                  haml_tag :span, talk.title, :class => "title"
                end
              end
            end
          end
        end
      end
    end
  end
end

set :css_dir, 'stylesheets'

set :js_dir, 'javascripts'

set :images_dir, 'images'

# Build-specific configuration
configure :build do
  # For example, change the Compass output style for deployment
   activate :minify_css

  # Minify Javascript on build
  # activate :minify_javascript

  # Enable cache buster
  # activate :asset_hash

  # Use relative URLs
   activate :relative_assets

  # Or use a different image path
  # set :http_prefix, "/Content/images/"
end
