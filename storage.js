// local storage helpers - source: http://stackoverflow.com/questions/2010892/storing-objects-in-html5-localstorage/3146971#3146971
Storage.prototype.setObject = function( key, value ) {
	this.setItem( key, JSON.stringify( value ) );
}

Storage.prototype.getObject = function( key ) {
	var value = this.getItem( key );
	return value && JSON.parse( value );
}

Storage.prototype.removeObject = function( key ) {
	this.removeItem( key );
}

$.setupStorage = function() {
	$.storage = localStorage.getObject( 'sokobanConspiration' ) || {
		'mute': 0,
		'level': 0,		
		'rounds': 0
	};
};

$.updateStorage = function() {
	localStorage.setObject( 'sokobanConspiration', $.storage );
};

$.clearStorage = function() {
	localStorage.removeObject( 'sokobanConspiration' );
	$.setupStorage();
};