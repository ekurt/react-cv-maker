import React from 'react'
import styles from './index.module.css'

export const Preview = () => {
	return (
		<div className={styles.preview}>
			<div className='w-2/6 bg-blue-400 h-full'>side</div>
			<div className='w-4/6 bg-green-400 h-full'>main</div>
		</div>
	)
}
