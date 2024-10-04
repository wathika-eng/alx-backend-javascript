class Building {
  constructor (sqft) {
    if (new.target === Building) {
      throw new Error('Cannot instantiate abstract class Building directly.');
    }
    this._sqft = sqft;
  }

  get sqft () {
    return this._sqft;
  }

  evacuationWarningMessage () {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}

// Example of a subclass
class OfficeBuilding extends Building {
  constructor (sqft, officeCount) {
    super(sqft);
    this._officeCount = officeCount;
  }

  get officeCount () {
    return this._officeCount;
  }

  evacuationWarningMessage () {
    return `Evacuate the office building with ${this._officeCount} offices!`;
  }
}
export default OfficeBuilding;
