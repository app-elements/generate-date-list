# Generate Date List

Simple utility that generates a simple list of dates. Useful for creating fixture data for interfaces that are based on dates.

For example, I use this with fixtures for an store that returns a list of events which happen to be based on date. In terms of developing the interface, it would be helpful if these dates stayed current based on "today" since the interface behaves differently based on today versus the dates in the data.

## Usage

`npm install generate-date-list --save-dev`


Signature:

`generateDateList(<length>, <incrementorCallback>, [<startDate>]);`

- `length` is the total length of the resulting array.
- `incrementorCallback` is a function that generates the desired date. It is only given the last date created as an argument.
- `startDate` is a Date object. Although not required, it will default to "today". Inclusive; the first item in the array is always this item.

Example:

```javascript
import generateDateList from 'generate-date-list';

const incrementor = (lastDate) => {
	// Do something to the last date
	lastDate.setDate(lastDate.getDate() + 1);
	return lastDate;
}

const dates = generateDateList(10, incrementor);
```

### Other builds

Use the following paths to pull in the package into your project

- AMD: `node_modules/generate-date-list/dist/amd/generate-date-list.js`
- CommonJS: `node_modules/generate-date-list/dist/cjs/generate-date-list.js`
- global: `node_modules/generate-date-list/dist/global/generate-date-list.js`

## License

MIT
