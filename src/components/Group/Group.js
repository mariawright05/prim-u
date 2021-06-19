import React from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import { v4 as uuidv4 } from 'uuid';
import GroupCard from '../GroupCard/GroupCard';
import './Group.css';

const GROUP_QUERY = gql`
  {
    forGroups {
      groupService
      groupServiceDescription
      groupServiceImage {
        url
      }
      groupButtonText
      groupButtonLink
    }
  }
`;

const Group = () => {
  const { loading, error, data } = useQuery(GROUP_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <section className="group">
      <div className="group__content-box">
        <h1 className="group__title">
          For <span className="group__text-accent">More</span> Than Just U
        </h1>
        <ul className="group__list-wrapper">
          {data.forGroups.map((event) => (
            <GroupCard key={uuidv4()} event={event} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Group;
