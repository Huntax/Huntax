redirect = input(G + '[+]' + C + ' Enter GDrive File URL : ' + W)
with open('/js/temploc.js', 'r') as js:
	reader = js.read()
	update = reader.replace('REDIRECT_URL', redirect)

with open('/js/script.js', 'w') as js_update:
	js_update.write(update)
