var addSub = function(s) {
  return (s.replace(/\s/g, "").match(/[+\-]?([0-9\.]+)/g) || []).reduce(
    function(sum, value) {
      return parseFloat(sum) + parseFloat(value);
    }
  );
};

exports.addSub = addSub;
