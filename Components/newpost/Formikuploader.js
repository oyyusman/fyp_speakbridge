import { View, Text, Image, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import * as Yup from 'yup'
import { Formik } from 'formik'

const uploadpostschema = Yup.object().shape({
    imageUrl: Yup.string().url().required('Image is required'),
    caption: Yup.string().max(2200, 'Caption is required')
})
const placeholderimage = 'https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-network-placeholder-png-image_3416659.jpg'



const Formikuploader = () => {
    const [thumbnailurl, setthumbnailurl] = useState(placeholderimage)

    return (
        <Formik
            initialValues={{ caption: '', imageUrl: '' }}
            onsubmit={(values) => console.log(values)}
            validationSchema={uploadpostschema}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors, isValid, touched }) => (
                <View>

                    <View style={{ margin: 20, justifyContent: 'space-between', flexDirection: 'row' }}>
                        {/* need to correct that for image */}
                        {/* <Image source={{ uri: thumbnailurl ? thumbnailurl : placeholderimage }} style={{ width: 150, height: 150 }} /> */}

                        <Image source={{ uri:   placeholderimage }} style={{ width: 150, height: 150 }} />

                        <TextInput
                            placeholder='Caption'
                            multiline={true}
                            onChangeText={handleChange('caption')}
                            onBlur={handleBlur('caption')}
                            value={values.caption}
                        />


                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <TextInput
                            onChange={(e) => setthumbnailurl(e.nativeEvent.text)}
                            placeholder='Enter Image Url'
                            onChangeText={handleChange('imageUrl')}
                            onBlur={handleBlur('imageUrl')}
                            value={values.imageUrl}
                        />
                        {errors.imageUrl && (<Text style={{ color: 'red' }}>{errors.imageUrl}</Text>)}
                        <Button title='Share' onPress={handleSubmit} disabled={isValid} />


                    </View>

                </View>
            )}

        </Formik>
    )
}

export default Formikuploader