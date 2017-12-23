``` NOTE: if you're in terminal and you typed a command that's in a weird state, type CTR-C ```

## Get files from Github (only do this once)
1. open Terminal Cmd-Space and type terminal
2. copy and paste `mkdir ~/workspace/; cd workspace` and hit return
3. copy and paste `git clone https://github.com/jcm1317/Peconic` and hit return

## To upload stuff to github (do this whenever you update the site)
1. navigate to [https://github.com/jcm1317/Peconic] on browser
2. click "Upload file"
3. add file
4. Directly under "Commit Changes" type in box "Added album ______" with the album name
5. Click "commit changes"

## Add new album
1. Add album art to assets folder
2. copy the following but change the things marked in '[' ']'

             <div class="col-xs-12">
                <div class="album">
                  <img class="album-art" src="assets/[album name].jpg">
                  <div>[Album name]</div>
                  <div>[Release date]</div>
                  <div class="textBuffer"></div>
                  <div>
                    <span class="left">[Release type, e.g. record, cd]</span>
                    <span class="right">
                      <a href="[band camp url link]">Listen</a>
                    </span>
                  </div>
                </div>
              </div>
3. open index.html in TextEdit
4. paste the above in the index.html file between where it says "Paste new album..."
5. Save the index.html file.
6. open Terminal Cmd-Space and type terminal
7. Copy and paste the following:
   `cd ~/workspace/Peconic/;  open index.html`
8. See upload instructions to upload.

## Upload instructions
1. navigate to [https://console.aws.amazon.com/quickstart-website/website/aws-website-peconicrecordscom-9icmv]
2. Under the 'source code' box, click 'Manage files in Amazon S3' link
3. go to folder you want to upload stuff to (assets for pictures)
4. click 'upload' button
5. click 'Add files' button
6. click next until finished


