+++
# Slider widget.
widget = "slider"  # See https://sourcethemes.com/academic/docs/page-builder/
headless = true  # This file represents a page section.
active = false  # Activate this widget? true/false
weight = 500  # Order that this section will appear.

# Slide interval.
# Use `false` to disable animation or enter a time in ms, e.g. `5000` (5s).
interval = 15000

# Slide height (optional).
# E.g. `500px` for 500 pixels or `calc(100vh - 70px)` for full screen.
height = ""

# Slides.
# Duplicate an `[[item]]` block to add more slides.
[[item]]
  title = "You've made it till the end"
  content = "Have a wonderful day :smile:"
  align = "center"  # Choose `center`, `left`, or `right`.

  # Overlay a color or image (optional).
  #   Deactivate an option by commenting out the line, prefixing it with `#`.
  overlay_color = "#666"  # An HTML color value.
  overlay_img = "headers/books.jpg"  # Image path relative to your `static/media/` folder.
  overlay_filter = 0.5  # Darken the image. Value in range 0-1.

  # Call to action button (optional).
  #   Activate the button by specifying a URL and button label below.
  #   Deactivate by commenting out parameters, prefixing lines with `#`.
  cta_label = "Read a book"
  cta_url = "/books"
  cta_icon_pack = "fas"
  cta_icon = "graduation-cap"

[[item]]
  title = "Can't make up your mind?"
  content = "How about a talk? :smile:"
  align = "left"

  overlay_color = "#555"  # An HTML color value.
  overlay_img = "headers/presentation.jpg"  # Image path relative to your `static/media/` folder.
  overlay_filter = 0.5  # Darken the image. Value in range 0-1.
  
  cta_label = "Watch a talk"
  cta_url = "/talk"
  cta_icon_pack = "fas"
  cta_icon = "comment-smile"

# [[item]]
#   title = "Unplug"
#   content = "Need to relax? :smile:"
#   align = "right"
# 
#   overlay_color = "#333"  # An HTML color value.
#   overlay_img = "headers/beach.jpg"  # Image path relative to your `static/media/` folder.
#   overlay_filter = 0.1  # Darken the image. Value in range 0-1.
#   
#   cta_label = "Yes! Please"
#   cta_url = "https://www.youtube.com/watch?v=ZToicYcHIOU&ab_channel=Calm"
#   cta_icon_pack = "fas"
#   cta_icon = "umbrella-beach"
+++