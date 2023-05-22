<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
		<html>
			<head>
				<link rel="stylesheet" type="text/css" href="cancion.css" />
			</head>
			<body>
				<h1>
					<span>
					informacion de la cancion
					</span>
				</h1>
				<h2>
					<xsl:value-of select="cancion/titulo"/>
				</h2>
				<h2>
					
					<xsl:value-of select="cancion/autor"/>
				</h2>

          <xsl:for-each select="cancion/letras/estrofaa"> 
					<div class="estrofaa">
							     <xsl:for-each select="verso">
						          <p class="verso">
     						    <xsl:value-of select="."/>
						          </p>
						  	    </xsl:for-each>  
					</div>
			</xsl:for-each>
			</body>
		</html>
	</xsl:template>
</xsl:stylesheet>



