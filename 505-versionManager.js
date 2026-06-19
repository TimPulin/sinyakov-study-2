class VersionManager {
  #versions = [];

  constructor(version) {
    const normalized = this._normalizeVersion(version)
    const validated = this._validateVersion(normalized) 
      ? normalized 
      : '0.1.0';
    this._addVersion(this._formatedVersion(validated));
  }

  major() {
    const version = this._getLastVersion();
    this._addVersion(this._createVersion(version.major + 1, 0, 0));

    return this;
  }

  minor() {
    const version = this._getLastVersion();
    this._addVersion(this._createVersion(version.major, version.minor + 1, 0));

    return this;
  }

  patch() {
    const version = this._getLastVersion();
    this._addVersion(this._createVersion(version.major, version.minor, version.patch + 1));

    return this;
  }

  rollback() {
    if (this.#versions.length === 1) {
      throw new Error("Cannot rollback!")
    }
    this._removeVersion();

    return this;
  }

  release() {
    const {major, minor, patch} = this._getLastVersion();
    return `${major}.${minor}.${patch}`;
  }

  _getLastVersion() {
    return this.#versions.at(-1);
  }

  _removeVersion() {
    this.#versions.pop();
  }

  _addVersion(formattedVersion) {
    this.#versions.push(formattedVersion)
  }

  _createVersion(major, minor, patch) {
    return {major, minor, patch}
  }

  _formatVersion(version) {
    const [major, minor, patch] = version.split('.');
    return this._createVersion(Number(major), Number(minor), Number(patch))
  }

  _normalizeVersion(version) {
    if (!version) {
      return '0.1.0';
    }

    const [major, minor = 0, patch = 0] = version.split('.');
    return `${major}.${minor}.${patch}`
  }

  _validateVersion(version) {
    const items = version.split('.');
    return items.length === 3 
      && items.every((item) => Number.isInteger(Number(item)))
      && !items.every((item) => item === '0');
  }
}

