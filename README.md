# beets-web
This is the new web UI for the beets Music Manager
https://github.com/sampsyo/beets

It's currently in a very early stage and a work in progress.

To use:
git clone https://github.com/sampsyo/beets.git --depth=1

git clone https://github.com/jtemplet/beets-web.git --depth=1

cd beets/beetsplug/web/
mv static/ static.bak/
ln -s ../../../beets-web/app/ static

Edit __init__.py
Change line 154 to
app = flask.Flask(__name__, static_folder='static', static_url_path='')

Change line 248 to
return app.send_static_file('index.html')

on line 249, add these lines
@app.route('/js/<path:path>')
def js_static_proxy(path):
    # send_static_file will guess the correct MIME type
    return app.send_static_file(os.path.join('js', path))

@app.route('/css/<path:path>')
def css_static_proxy(path):
    # send_static_file will guess the correct MIME type
    return app.send_static_file(os.path.join('css', path))


cd  ../../../beets-web/
npm install
bower install
gulp
cd ../beets
beet web
