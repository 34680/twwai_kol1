const convertData = (data) => {
    const lines = data.trim().split('\n');
    lines.shift();
    return lines.map(line => {
        const [data, label, borderColor, fill] = line.split(',');
        return {
            x: data,
            y: label,
            z: borderColor,
            a: fill
        }
    });
};