publish:

	git commit -am'bump :pray:'; git push; npx tsc && npm version patch && npm publish
