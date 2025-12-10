const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'node_modules', 'esm', 'esm.js');

try {
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        // Replace the problematic line that crashes on Node 20+
        // const __global__ = this; -> const __global__ = globalThis;
        const newContent = content.replace(
            'const __global__ = this;',
            'const __global__ = globalThis;'
        );

        if (content !== newContent) {
            fs.writeFileSync(filePath, newContent, 'utf8');
            console.log('Successfully patched esm/esm.js for Node 20+ compatibility.');
        } else {
            console.log('esm/esm.js is already patched or content mismatch.');
        }
    } else {
        console.log('node_modules/esm/esm.js not found. Skipping patch.');
    }
} catch (error) {
    console.error('Error patching esm:', error);
    // Don't fail the build if patching fails, though it might crash later
}
