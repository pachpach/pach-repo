


const pach = (...args) => {
    return args.join(' ').split(' ').join('-pach-');
}

exports.pach = pach;