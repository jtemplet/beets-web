#This is still a work in progress.

This project was originally copied from jquery-backbone-browserify-example
seen here https://github.com/learn-js/jquery-backbone-browserify-example

If you haven't installed node, do so with
by going here: http://nodejs.org/

#Development

npm run-script build
npm start


#To Use In Conjuction with beets web plugin

To use:

```
git clone https://github.com/sampsyo/beets.git --depth=1
```

```
git clone https://github.com/jtemplet/beets-web.git --depth=1
```

```
cd beets-web
npm run-script build
```

```
cd ../beets/beetsplug/web/
```

```
mv static/ static.bak/
```
Edit `__init__.py`
Change line 154 to

```
app = flask.Flask(__name__, static_folder='static', static_url_path='')
```

Change line 248 to

```
return app.send_static_file('index.html')
```

on line 249, add these lines

```python
@app.route('/js/<path:path>')
def js_static_proxy(path):
    # send_static_file will guess the correct MIME type
    return app.send_static_file(os.path.join('js', path))

@app.route('/css/<path:path>')
def css_static_proxy(path):
    # send_static_file will guess the correct MIME type
    return app.send_static_file(os.path.join('css', path))
```

```
cd  ../../../beets-web/
cd ../beets/
ln -s beetsplug/web/static ../beets-web
beet web
```

Note: If you are tweaking the Javascript, you have to do a npm run-script build to update the bundle.js to view the updated code in the browser




