import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup';

function Transakcja({ setHistoria, setSaldo, SetBilans }) {

  const formik = useFormik({
    initialValues: {
      name: '',
      value: 0
    }, onSubmit: (values) => {
      setHistoria((historia) => [...historia, { name: values.name, value: values.value }]);
      SetBilans(previous => previous + values.value)
      if (values.value < 0) {
        setSaldo(previousState => {
          return { ...previousState, wyplywy: values.value + previousState.wyplywy }
        })
      } else {
        setSaldo(previousState => {
          return { ...previousState, wplywy: values.value + previousState.wplywy }
        })
      }
    }, validationSchema: Yup.object({
      name: Yup.string().max(15, 'Maksymalnie 15 znaków').min(3, 'Minimum 3 znaki').required('Pole wymagane'),
      value: Yup.number().required('Pole wymagane')
    })
  })

  return (
    <>
      <form className='form' onSubmit={formik.handleSubmit}>
        <label>
          <h3>Rodzaj transakcji</h3>
          <input
            className='input'
            id='name'
            type='text'
            placeholder='Enter text'
           {...formik.getFieldProps('name')}
          />
          {formik.touched.name && formik.errors.name ? <p className='error'>{formik.errors.name}</p> : null}
        </label>

        <label>
          <h3>Użyte środki<br />Z znakiem - jeśli pobierasz kwote</h3>
          <input
            className='input'
            type='number'
            id='value'
            placeholder='Podaj kwote'
            {...formik.getFieldProps('value')}
          />
          {formik.touched.value && formik.errors.value ? <p className='error'>{formik.errors.value}</p> : null}
        </label>
        <input className='submit' type={'submit'} />
      </form>
    </>
  )
}

export default Transakcja