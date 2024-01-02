import LevDist from 'levdist';

declare module 'line-diff' {
    /** This is used for comparing two lines. */
    class Change {
        /** @member {[string, string]} _ An array with the old line and the new line. */
        _: [string, string];
        /** @member {LevDist} changes How many changes are there, calculated with the levenshtein distance algorithm. */
        changes: LevDist;
        /** @member {boolean} modified How many changes are there, calculated with the levenshtein distance algorithm. */
        modified: boolean;
        /** @member {number} lineno A boolean value representing if the old line was modified or not. */
        lineno: number;

        /**
         * @param {string} oldLine The old line value.
         * @param {string} addedLine The new line.
         * @param {number} sensitivity The diff sensitivity.
         */
        constructor(oldLine: string, addedLine: string, sensitivity: number, lineno: number);
    }

    /** Compares strings line by line. */
    class Diff {
        /** @member {string[]|string} old_lines The old lines. */
        public old_lines: string | string[];
        /** @member {string[]|string} new_lines The new lines. */
        public new_lines: string | string[];
        /** @member {number} sensitivity The diff sensitivity. */
        public sensitivity: number;
        /** @member {Change[]} changes An array of `Change` objects. */
        public changes: Change[];

        /**
         * @param {string|string[]} oldLines The old lines.
         * @param {string|string[]} newLines The new lines.
         * @param {number} sensitivity A number representing how many changes should be there to consider that a line was changed (default: `0`).
         */
        constructor(oldLines: string | Array<any>, newLines: string | Array<any>, sensitivity?: number);

        /**
         * Converts the lines comparison into a string.
         * @function toString
         * @return {string} The stringified diff.
         */
        toString(): string;
    }

    export = Diff;
}
