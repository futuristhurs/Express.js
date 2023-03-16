app.get('/articles', function(req, res) {
  var articles = [
    { title: 'Article 1', body: 'Lorem ipsum dolor sit amet' },
    { title: 'Article 2', body: 'Consectetur adipiscing elit' },
    { title: 'Article 3', body: 'Sed do eiusmod tempor incididunt' }
  ];
  res.render('articles', { articles: articles });
});
