import { fetchProjectAndRedirect } from '@cloud/_api/fetchProject.js'
import { Accordion } from '@components/Accordion/index.js'
import { HR } from '@components/HR/index.js'
import { MaxWidth } from '@components/MaxWidth/index.js'
import { mergeOpenGraph } from '@root/seo/mergeOpenGraph.js'
import React from 'react'
import { Fragment } from 'react'

import { NoData } from '../_layoutComponents/NoData/index.js'
import { SectionHeader } from '../_layoutComponents/SectionHeader/index.js'
import { AddEnvs } from './AddEnvs/index.js'
import { ManageEnvs } from './ManageEnvs/index.js'
import { Secret } from './Secret/index.js'
import classes from './page.module.scss'

export default async ({
  params,
}: {
  params: Promise<{
    'project-slug': string
    'team-slug': string
  }>
}) => {
  const { 'project-slug': projectSlug, 'team-slug': teamSlug } = await params
  const { project, team } = await fetchProjectAndRedirect({ projectSlug, teamSlug })

  return (
    <MaxWidth>
      <SectionHeader className={classes.header} title="Environment Variables" />
      <div className={classes.description}>
        {`For security reasons, any variables you wish to provide to the Admin panel must
        be prefixed with `}
        <code>PAYLOAD_PUBLIC_</code>
        {'. '}
        <a
          className={classes.link}
          href={`${process.env.NEXT_PUBLIC_SITE_URL}/docs/admin/webpack#admin-environment-vars`}
          rel="noopener noreferrer"
          target="_blank"
        >
          Learn more
        </a>
        .
      </div>
      <Fragment>
        <Accordion label="New variables" openOnInit>
          <AddEnvs envs={project?.environmentVariables} projectID={project?.id} />
        </Accordion>
        <HR />
        {(project?.environmentVariables || []).length === 0 ? (
          <NoData message="This project currently has no environment variables." />
        ) : (
          <ManageEnvs envs={project?.environmentVariables} projectID={project?.id} />
        )}
      </Fragment>
      <HR />
      <SectionHeader className={classes.header} title="Payload Secret" />
      <div className={classes.description}>
        {`This is a secure string used to authenticate with Payload. It was automatically generated
        for you when this project was created. `}
        <a
          className={classes.link}
          href={`${process.env.NEXT_PUBLIC_SITE_URL}/docs/getting-started/installation`}
          rel="noopener noreferrer"
          target="_blank"
        >
          Learn more
        </a>
        .
      </div>
      <Secret project={project} />
    </MaxWidth>
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    'project-slug': string
    'team-slug': string
  }>
}) {
  const { 'project-slug': projectSlug, 'team-slug': teamSlug } = await params
  return {
    openGraph: mergeOpenGraph({
      title: 'Environment Variables',
      url: `/cloud/${teamSlug}/${projectSlug}/settings/environment-variables`,
    }),
    title: 'Environment Variables',
  }
}
