const supabase = require('../config/supabaseInit');

exports.firstFunction = async (req, res) => {
    console.log('firstFunction');

    const response = await supabase
        .from('countries')
        .select('*')
        .match({ id: 2 });

    return res.status(200).json({
        'message': 'firstFunction',
        'status': 200,
        'data': response.data
    });
}

exports.signup = async (req, res) => {
    const { user, session, error } = await supabase.auth.signUp({
        email: 'dmeo@email.com',
        password: 'demo-password',
    })

    return res.status(200).json({
        'message': 'User created successfully',
        'status': 200,
    });
}

exports.updateUser = async (req, res) => {
    const { user, error } = await supabase.auth.update({email: 'demo@email.com'})

    return res.status(200).json({
        'message': 'User updated successfully',
        'status': 200,
        'error': error,
        'user': user
    });
}
