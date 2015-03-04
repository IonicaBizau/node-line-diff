// Dependencies
var LevDist = require("levdist");

//function Change(removed, added, notModified,) {
//    this._ = [removed, added];
//    this.
//}

function Diff(oldLines, newLines, sensitivity) {
    var self = this;
    self.old_lines = oldLines;
    self.new_lines = newLines;
    self.sensitivity = sensitivity || 0;
    self.changes = [];

    // Convert to array
    oldLines = typeof oldLines === "string" ? oldLines.split("\n") : oldLines;
    newLines = typeof newLines === "string" ? newLines.split("\n") : newLines;

    // Iterate the new lines
    var cOldLine = null
      , oldLineI = 0
      ;

      debugger
    newLines.forEach(function (cNewLine, i) {
        cOldLine = oldLines[oldLineI];

        if (cOldLine) {
            ++oldLineI;
        }

        self.changes.push({
            _: [cOldLine, cNewLine]
          , changes: LevDist(cOldLine, cNewLine)
        });
    });
}

Diff.prototype.toString = function () {

    var self = this
      , str = ""
      , cDiff = { added: "", removed: "" }
      ;

    self.changes.forEach(function (cChange) {

        if (cChange.changes <= self.sensitivity) {
            str += cDiff.removed;
            str += cDiff.added;

            str += "   " + cChange._[1] + "\n"
        } else {
            cDiff.removed += " - " + cChange._[0] + "\n"
            if (cChange._[1]) {
                cDiff.added += " + " + cChange._[1] + "\n"
            }
        }
    });

    return str;
};

function LineDiff (oldLines, newLines, sensitivity) {
    return new Diff(oldLines, newLines, sensitivity);
}

module.exports = LineDiff;
