module.exports = (factory, Models) => {
  factory.define('Article', Models.Article, {
    title: 'My awesome title',
    content: 'lorme ipsum etcetera...',
    createdAt: new Date(),
    updatedAt: new Date(),
  });
};
