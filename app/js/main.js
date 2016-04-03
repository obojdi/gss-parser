$(document).ready(function() {
	var
		key = '1VoElmAN-isSkTdBLmfkntNj7M0eiizF90bdGVWu7HDc',
		public_spreadsheet_url = 'https://docs.google.com/spreadsheet/pub?hl=en_US&hl=en_US&output=html&key=' + key;
	Tabletop.init({
		key: public_spreadsheet_url,
		callback: showInfo,
		simpleSheet: true
	})

	var
		options = {
			valueNames: []
		};

	function showInfo(data, tabletop) {
		data.forEach(function(element, index) {
			$tr = $('<tr/>')
			for (var a in element) {
				$value = $('<td class="' + a + '"/>').text(element[a]);
				if (index == 0) {
					$tr.addClass('heading')
					options.valueNames.push(a)
					$('<button class="sort" data-sort="' + a + '">').text(a).appendTo($('.buttons'))
				}
				$value.appendTo($tr)
			}
			$tr.appendTo($('table'))
		});

		var list = new List('list', options);
	}
});