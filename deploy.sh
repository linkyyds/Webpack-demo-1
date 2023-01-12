yarn build &&
git branch gh-pages &&
git checkout gh-pages &&
rm -rf src *.html *.js *.css *.png *.lock *.json *.sh &&
mv dist/* ./ &&
rm -rf dist &&
git add . &&
git commit -m 'update' &&
git push --set-upstream origin gh-pages &&
git checkout - 
# - 代表上一个分支