#This is still a work in progress.

beets-web is the web frontend to the <a href="https://github.com/sampsyo/beets">beets media library system</a>

How to get started:

If you haven't installed node, do so with
by going <a href="http://nodejs.org/">to the node community website</a>

Note: this has yet to be tested with <a href="https://iojs.org/en/index.html">io.js</a>

#Development

> npm start


#To Use In Conjunction with beets web plugin

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
Change line 154 from:

```python
app = flask.Flask(__name__)
```
to:
```python
app = flask.Flask(__name__, static_folder='static', static_url_path='')
```

Change line 248 from:

```python
return flask.render_template('index.html')
```
to:
```python
return app.send_static_file('index.html')
```

on line 252, add these lines

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
cd  ../..
ln -s beetsplug/web/static ../beets-web
beet web
```

Notes: 

* If you are tweaking the Javascript, you have to do a 'npm run-script build' to update the bundle.js to view the updated code in the browser

* if 
``` 
npm run-script build
```
doesn't work, remove the ./node_modules directory and then do a 
```
npm install
```
then retry
``` 
npm run-script build
```




