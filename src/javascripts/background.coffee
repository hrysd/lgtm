copy = (value) ->
  clip = document.createElement('input')
  clip.type = 'text'
  clip.value = value
  document.body.appendChild(clip)
  do clip.select
  document.execCommand('copy')
  do clip.remove

chrome.browserAction.onClicked.addListener ->
  $.getJSON 'http://www.lgtm.in/g', (data) ->
    options = {
      type:    'image'
      title:   'LGTM!!'
      message: 'Looks good to me!'
      iconUrl: 'images/icon-128.png'
      imageUrl: data.imageUrl
      priority: 0
    }

    chrome.notifications.create "#{new Date}", options, (h) ->
      copy "![LGTM](#{data.imageUrl})"
