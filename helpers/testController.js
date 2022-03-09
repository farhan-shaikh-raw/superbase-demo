
exports.firstFunction = async (req, res) => {
    console.log('firstFunction');

    return res.status(200).json({
        'message': 'firstFunction',
        'status': 200,
    });
}