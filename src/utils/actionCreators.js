export function readArticle (store) {
  const state = store.getState();
  const index = store.get('currentIndex');
  const article = state.get('articles').get(state.get('currentArticle'));
  if (index < article.length) {
    setTimeout(() => {
      store.dispatch(this, {type: 'NEXT_WORD'});
    }, state.get('speed'));
  } else {
}