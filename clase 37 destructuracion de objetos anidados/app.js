let autoSave = {
    file: 'index.php',
    cursor: {
        line: 7,
        column: 16
    },
    lastFile: {
        file: 'app.js',
        cursor: {
            line: 8,
            column: 20
        }
    }
}

let { cursor } = autoSave
console.log(cursor)

let { lastFile: { cursor: lastFile } } = autoSave
console.log(lastFile)

let { lastFile: { cursor: otherCursor } } = autoSave
console.log(otherCursor)

/**
{line: 7, column: 16}
{line: 8, column: 20}
{line: 8, column: 20}
 */
