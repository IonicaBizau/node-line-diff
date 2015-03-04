// Dependencies
var LevDist = require("levdist");

function Change(removed, added, sensitivity) {
    this._ = [removed, added];
    this.changes = LevDist(removed, added);
    this.modified = this.changes > sensitivity;
}

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
    var cOldLine = null;
    newLines.forEach(function (cNewLine, i) {
        cOldLine = oldLines[i] || "";
        self.changes.push(new Change(cOldLine, cNewLine, self.sensitivity));
    });
}

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

function LineDiff (oldLines, newLines, sensitivity) {
    return new Diff(oldLines, newLines, sensitivity);
}

module.exports = LineDiff;
