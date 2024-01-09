const getAllUsers = (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'get all users',
  });
};

const getAUser = (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'get a user',
  });
};

const createUser = (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'create a user',
  });
};

const updateUser = (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'update a user',
  });
};

const deleteUser = (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'delete a user',
  });
};

export { getAllUsers, getAUser, createUser, updateUser, deleteUser };
