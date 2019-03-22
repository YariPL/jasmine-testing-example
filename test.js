function add(x, y) {
	return x + y;
}

add(2, 3); // 5
add(2, 3); // 6
add('2', '3'); // '23'
add('22',true); // error

// tests below
expect(add(2, 3).toBe(5));
expect(add(2, 'test')).toThrow();
expect(add(0.1, 0.2)).toBe(0.3);