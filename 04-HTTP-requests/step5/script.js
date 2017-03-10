// Jquery.Ajax user XMLHttpRequest
// XMLHttpRequest in the raw browser object that jQuery wraps into a more usable and simplified form and cross browser consistent functionality.
// http://stackoverflow.com/questions/4657287/what-is-the-difference-between-xmlhttprequest-jquery-ajax-jquery-post-jquery
$(document).ready(function() {
	var formData = {
		'msg': 'Hello World!',
		'demo': 'web-advanced'
	}

	// $.ajax({
	//   'type': 'GET',
	//   'data': formData, //No need to stringify
	//   'contentType': 'application/json',
	//   'url': 'http://www.httpbin.org/get',
	//   success: function(res) {
	//     console.log('GET: Got Response')
	//     console.log(res)
	//   },
	//   error: function(request, status, error) {
	//     console.error(request.responseText)
	//   }
	// })
	//
	// $.ajax({
	//   'type': 'POST',
	//   'data': JSON.stringify(formData),
	//   'contentType': 'application/json',
	//   'Content-Length': formData.length,
	//   'url': 'http://www.httpbin.org/post',
	//   success: function(res) {
	//     console.log('POST: Got Response')
	//     console.log(res)
	//     console.log('POST Response Data', JSON.parse(res.data))
	//   },
	//   error: function(request, status, error) {
	//     console.error(request.responseText)
	//   }
	// })

	// Assign handlers immediately after making the request,
	// and remember the jqxhr object for this request
	var jqxhr =
		$.ajax({
			'type': 'GET',
			'data': JSON.stringify(formData),
			'url': 'http://www.httpbin.org/get'
		})
		.done(function(data) {
			console.log(data)
			console.log('success')
		})
		.fail(function() {
			console.log('error')
		})
		.always(function() {
			console.log('finished')
		})

	// Perform other work here ...

	// Set another completion function for the request above
	jqxhr.always(function() {
		console.log('second finished')
	})
})
