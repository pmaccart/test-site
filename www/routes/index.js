
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index.html', { title: 'Express', user: 'pmaccart' });
};


/*
 * GET blog post.
 */

exports.post = function(req, res){
  res.render('post.html', { title: 'Express', num: '1' });
};