import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
	model() {
    	return {
			text: 'Placeholder text'
		}
  	}
}