module.exports.fibo = async (req, res) => {
  const { arg1, arg2, arg3} = req.body;

  let sequence = [arg1, arg2];
  for (let i = 2; i < arg3 + 2; i++) {
    let next = sequence[i - 1] + sequence[i - 2];
    sequence.push(next);
  }

  const fibo = sequence.reverse();
  res.status(200).json({ fibo });
};




