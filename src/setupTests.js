// Shims
import entries from 'object.entries';


if (!Object.entries) {
    entries.shim();
}
