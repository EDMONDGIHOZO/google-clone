import React from "react";
import '@/assets/styles/avatar.css';

export const Avatar: React.FC<{ imageUrl: string, altText?: string }> = ({imageUrl, altText}) => {
    return (
        <div className="gc_avatar-wrapper">
            <img src={imageUrl} alt={altText || 'Avatar'} className="gc_avatar-image"/>
        </div>
    )
}