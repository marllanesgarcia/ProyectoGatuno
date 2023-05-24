<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
		<html>
			<head>
				<link rel="stylesheet" type="text/css" href="estilosxml.css" />
			</head>
			<body>
				<h1>
					<xsl:value-of select="gato/titulo"/>
				</h1>
				<h2>
					<xsl:value-of select="gato/titulo"/>
				</h2>
				<h3>
					<xsl:value-of select="gato/autor"/>
				</h3>
			
          <xsl:for-each select="gato/main/norma"> 
					<div class="norma">
							     <xsl:for-each select="linea">
							     	<span>
						          <p class="linea">
     						          <xsl:value-of select="."/>
						          </p>
						          </span>
						      </xsl:for-each>  
					</div>
					
				</xsl:for-each>
			</body>
		</html>
	</xsl:template>
</xsl:stylesheet>




