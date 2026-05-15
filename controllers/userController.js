import bcrypt from 'bcrypt';



export const loginUser = async (req, res) => {

  return res.status(200).json({});

}


export const registerUser = async (req, res) => {
  const { email, fullname, password } = req.body || {};
  try {

    const isExist = await User.findOne({ email });
    if (isExist) return res.status(409).json({ message: "User already exists" });

    const hashPass = bcrypt.hashSync(password, 10);
    await User.create({
      fullname,
      email,
      password: hashPass
    });
    return res.status(201).json({ message: "User created" });
  } catch (err) {

    return res.status(400).json({ message: err.message });

  }
}