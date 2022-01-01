redirect = input(G + '[+]' + C + ' Enter GDrive File URL : ' + W)
with open('template/gdrive/js/location_temp.js', 'r') as js:
	reader = js.read()
	update = reader.replace('REDIRECT_URL', redirect)

with open('template/gdrive/js/location.js', 'w') as js_update:
	js_update.write(update)