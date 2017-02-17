function bench(f, n) {
  var d = new Date();
  for (var i = 0; i < n; i++) f();
  return new Date() - d;
}
