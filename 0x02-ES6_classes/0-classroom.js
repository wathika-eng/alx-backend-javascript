class ClassRoom {
  constructor (_maxStudentsSize) {
    this._maxStudentsSize = _maxStudentsSize;
  }

  room () {
    return this._maxStudentsSize;
  }
}

export default ClassRoom;
