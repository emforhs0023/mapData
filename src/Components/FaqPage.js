import React, { useCallback, useState, useEffect } from 'react';
import { Button, Form, Input, Card, Avatar, Icon } from 'antd';
import { Table, Divider, Tag } from 'antd';

const FaqPage = ({ data, index}) => {
	const [open, setOpen] = useState(false)

 	const openBox = useCallback((e) => {
        e.preventDefault()
        setOpen(!open)
        
    }, [open]);
	
	return(
		<>
			<div className="faqDataZoon" style={{cursor: "pointer", clear: "both"}} onClick={openBox}>
				<p>
					<span className="category">{data.category}</span>
					<span className="title">{data.title}</span>
				</p>
				{open &&
					<div className="panel">
						<p className="contentFont">{data.content}</p>
					</div>
				}
			</div>
		</>
	)
}

export default FaqPage