import React from "react";
import '@/assets/styles/avatar.css';

export const Avatar: React.FC<{ imageUrl: string, altText?: string }> = ({imageUrl, altText}) => {
    return (
        <div className="avatar-wrapper">
            <img src={imageUrl} alt={altText || 'Avatar'} className="avatar-image"/>
        </div>
    )
}