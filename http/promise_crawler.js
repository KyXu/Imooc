var http = require('http')
//var Promise = require('bluebird')
var cheerio = require('cheerio')
var url = 'http://www.imooc.com/learn/348'

function filterChapters(html) {
  var $ = cheerio.load(html)

  $('.chapter-content').remove()
  $('.moco-btn').remove()
  var chapters = $('.chapter')

  var courseData = []

  chapters.each(function(item) {

    var chapter = $(this)
    chapter.find('.chapter-content').remove;
    var chapterTitle = chapter.find('strong').text().trim()
    var videos = chapter.find('.video').children('li')
    var chapterData = {
        chapterTitle : chapterTitle,
        videos:[]
    }
    videos.each(function(item) {
      var video = $(this)
      var videoTitle = video.find('.J-media-item').text().replace(/\s+/g,' ')
      var id = video.find('.J-media-item').attr('href').split('video/')[1]

      chapterData.videos.push({
        title:videoTitle,
        id:id
      })
    })

    courseData.push(chapterData)
  })

  return courseData
}

function printCourseInfo(courseData) {

  courseData.forEach(function(item) {
    var chapterTitle = item.chapterTitle
    console.log(chapterTitle + '\n')

    item.videos.forEach(function(video){
    		console.log('  【' + video.id + '】' + video.title + '\n')
    })
  })
}

http.get(url, function(res) {
  var html = ''

  res.on('data', function(data){
    html += data
  })

  res.on('end', function() {

    var courseData = filterChapters(html)
   printCourseInfo(courseData)
  })
}).on('error', function(){
  console.log("error")
})
