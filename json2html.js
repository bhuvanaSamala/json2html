// json2html.js
export default function json2html(data) {
    // Create the table element
    let table = '<table data-user="bhuvanasamala7@gmail.com">\n';
    table += '    <thead>\n';
    table += '        <tr><th>Name</th><th>Age</th><th>Gender</th></tr>\n';
    table += '    </thead>\n';
    table += '    <tbody>\n';

    // Loop through each object in the data array
    data.forEach(item => {
        table += '        <tr>';
        table += `            <td>${item.Name}</td>`;
        table += `            <td>${item.Age}</td>`;
        // Check if Gender exists and add it to the row, else add an empty cell
        if (item.Gender) {
            table += `            <td>${item.Gender}</td>`;
        } else {
            table += '            <td></td>'; // Add empty cell for Gender
        }
        table += '        </tr>\n';
    });

    table += '    </tbody>\n';
    table += '</table>';
    
    return table; // Return the HTML string
}
