// Dependencies
var LevDist = require("levdist");

/**
 * Change
 * A private function to compare two lines.
 *
 * @name Change
 * @function
 * @param {String} oldLine The old line value.
 * @param {String} addedLine The new line.
 * @param {Number} sensitivity The diff sensitivity.
 * @return {Change} The `Change` object:
 *
 *  - `_` (Array): An array with the old line and the new line.
 *  - `changes` (Number): How many changes are there, calculated with the levenshtein distance algorithm.
 *  - `modified` (Boolean): A boolean value representing if the old line was modified or not.
 */
function Change(oldLine, addedLine, sensitivity) {
    this._ = [oldLine, addedLine];
    this.changes = LevDist(oldLine, addedLine);
    this.modified = this.changes > sensitivity;
}

/**
 * Diff
 * Compares strings line by line.
 *
 * @name Diff
 * @function
 * @param {String|Array} oldLines The old lines.
 * @param {String|Array} newLines The new lines.
 * @param {Number} sensitivity A number representing how many changes should be there to consider that a line was changed (default: `0`).
 * @return {Diff} The `Diff` object containing:
 *
 *  - `old_lines` (Array): The old lines.
 *  - `new_lines` (Array): The new lines.
 *  - `sensitivity` (Number): The diff sensitivity.
 *  - `changes` (Array): An array of `Change` objects.
 *  - `toString` (Function): A function to stringify the diff.
 */
function Diff(oldLines, newLines, sensitivity) {
    var self = this;

    if (self.constructor !== Diff) {
        return new Diff(oldLines, newLines, sensitivity);
    }

    self.sensitivity = sensitivity || 0;
    self.changes = [];

    // Convert to array
    oldLines = typeof oldLines === "string" ? oldLines.split("\n") : oldLines;
    newLines = typeof newLines === "string" ? newLines.split("\n") : newLines;

    self.old_lines = oldLines;
    self.new_lines = newLines;

    // Iterate the new lines
    var cOldLine = null;
    newLines.forEach(function (cNewLine, i) {
        cOldLine = oldLines[i] || "";
        self.changes.push(new Change(cOldLine, cNewLine, self.sensitivity));
    });
}

/**
 * toString
 * Converts the lines comparison into a string.
 *
 * @name toString
 * @function
 * @return {String} The stringified diff.
 */
Diff.prototype.toString = function () {

    var self = this
      , str = ""
      , cDiff = { added: "", removed: "" }
      ;

    self.changes.forEach(function (cChange) {

        if (!cChange.modified) {
            str += cDiff.removed;
            str += cDiff.added;
            cDiff.removed = "";
            cDiff.added = "";
            str += "   " + cChange._[1] + "\n"
        } else {
            cDiff.removed += " - " + cChange._[0] + "\n"
            if (cChange._[1]) {
                cDiff.added += " + " + cChange._[1] + "\n"
            }
        }
    });

    str += cDiff.removed;
    str += cDiff.added;

    return str;
};

module.exports = Diff;
